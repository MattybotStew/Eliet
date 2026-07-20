import { createContext, useContext, useReducer, useCallback, useEffect, type ReactNode } from "react";
import { toast } from "sonner";
import type { ComparisonState, ComparisonAction } from "./types";

/** Matches YITH Compare “Maximum number of products to compare” setting */
const MAX_COMPARE = 3;

/** Mimics YITH’s cookie-backed compare list across navigation / refresh */
const STORAGE_KEY = "eliet-yith-compare-ids";

const ORANGE = "#ef7d00";

function loadStoredIds(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id): id is number => typeof id === "number").slice(0, MAX_COMPARE);
  } catch {
    return [];
  }
}

function comparisonReducer(state: ComparisonState, action: ComparisonAction): ComparisonState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, selectedIds: action.ids.slice(0, MAX_COMPARE) };
    case "TOGGLE": {
      const id = action.id;
      if (state.selectedIds.includes(id)) {
        return { ...state, selectedIds: state.selectedIds.filter((i) => i !== id) };
      }
      if (state.selectedIds.length >= MAX_COMPARE) {
        toast.error(`You can compare up to ${MAX_COMPARE} products at a time.`, {
          style: { fontFamily: "'Overpass', sans-serif", fontSize: "13px" },
        });
        return state;
      }
      toast.success("Product added to comparison", {
        style: { fontFamily: "'Overpass', sans-serif", fontSize: "13px", background: ORANGE, color: "white" },
        duration: 2000,
      });
      return {
        ...state,
        selectedIds: [...state.selectedIds, id],
        // Auto-expand preview when reaching 2+ products (YITH opens table on 2nd; we preview in bar)
        isBarExpanded: state.selectedIds.length + 1 >= 2 ? true : state.isBarExpanded,
      };
    }
    case "REMOVE":
      return { ...state, selectedIds: state.selectedIds.filter((i) => i !== action.id) };
    case "CLEAR_ALL":
      return { ...state, selectedIds: [], isModalOpen: false, isBarExpanded: false };
    case "OPEN_MODAL":
      return { ...state, isModalOpen: true };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
    case "TOGGLE_BAR_EXPANDED":
      return { ...state, isBarExpanded: !state.isBarExpanded };
    default:
      return state;
  }
}

const ComparisonContext = createContext<{
  state: ComparisonState;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  clearAll: () => void;
  openModal: () => void;
  closeModal: () => void;
  toggleBarExpanded: () => void;
  isSelected: (id: number) => boolean;
  isMaxed: boolean;
  maxCompare: number;
} | null>(null);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(comparisonReducer, {
    selectedIds: [],
    isModalOpen: false,
    isBarExpanded: false,
  });

  // Hydrate from localStorage (YITH uses a cookie for the same purpose)
  useEffect(() => {
    const ids = loadStoredIds();
    if (ids.length) dispatch({ type: "HYDRATE", ids });
  }, []);

  // Persist list whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.selectedIds));
    } catch {
      /* ignore quota / private mode */
    }
  }, [state.selectedIds]);

  const toggle = useCallback((id: number) => dispatch({ type: "TOGGLE", id }), []);
  const remove = useCallback((id: number) => dispatch({ type: "REMOVE", id }), []);
  const clearAll = useCallback(() => dispatch({ type: "CLEAR_ALL" }), []);
  const openModal = useCallback(() => dispatch({ type: "OPEN_MODAL" }), []);
  const closeModal = useCallback(() => dispatch({ type: "CLOSE_MODAL" }), []);
  const toggleBarExpanded = useCallback(() => dispatch({ type: "TOGGLE_BAR_EXPANDED" }), []);
  const isSelected = useCallback((id: number) => state.selectedIds.includes(id), [state.selectedIds]);
  const isMaxed = state.selectedIds.length >= MAX_COMPARE;

  return (
    <ComparisonContext.Provider
      value={{
        state,
        toggle,
        remove,
        clearAll,
        openModal,
        closeModal,
        toggleBarExpanded,
        isSelected,
        isMaxed,
        maxCompare: MAX_COMPARE,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const ctx = useContext(ComparisonContext);
  if (!ctx) throw new Error("useComparison must be used within ComparisonProvider");
  return ctx;
}
