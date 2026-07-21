import { createContext, useContext, useReducer, useCallback, useEffect, type ReactNode } from "react";
import { toast } from "sonner";
import type { ComparisonState, ComparisonAction } from "./types";

/** Extify: “Max Products for Comparison” */
const MAX_COMPARE = 3;

/** Cookie stand-in for the plugin’s compare list */
const STORAGE_KEY = "exppc_compare_list";

/**
 * Extify: “Automatically Open Comparison Widget”
 * Open the popup when a product is successfully added.
 */
const AUTO_OPEN_ON_ADD = true;

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
        const next = state.selectedIds.filter((i) => i !== id);
        return {
          ...state,
          selectedIds: next,
          isPopupOpen: next.length === 0 ? false : state.isPopupOpen,
        };
      }
      if (state.selectedIds.length >= MAX_COMPARE) {
        toast.error(`You can compare up to ${MAX_COMPARE} products at a time.`, {
          style: { fontFamily: "'Overpass', sans-serif", fontSize: "13px" },
        });
        return state;
      }
      const next = [...state.selectedIds, id];
      return {
        ...state,
        selectedIds: next,
        isPopupOpen: AUTO_OPEN_ON_ADD ? true : state.isPopupOpen,
      };
    }
    case "REMOVE": {
      const next = state.selectedIds.filter((i) => i !== action.id);
      return {
        ...state,
        selectedIds: next,
        isPopupOpen: next.length === 0 ? false : state.isPopupOpen,
      };
    }
    case "CLEAR_ALL":
      return { ...state, selectedIds: [], isPopupOpen: false };
    case "OPEN_POPUP":
      return { ...state, isPopupOpen: true };
    case "CLOSE_POPUP":
      return { ...state, isPopupOpen: false };
    default:
      return state;
  }
}

const ComparisonContext = createContext<{
  state: ComparisonState;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  clearAll: () => void;
  openPopup: () => void;
  closePopup: () => void;
  isSelected: (id: number) => boolean;
  isMaxed: boolean;
  maxCompare: number;
} | null>(null);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(comparisonReducer, {
    selectedIds: [],
    isPopupOpen: false,
  });

  useEffect(() => {
    const ids = loadStoredIds();
    if (ids.length) dispatch({ type: "HYDRATE", ids });
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.selectedIds));
    } catch {
      /* ignore */
    }
  }, [state.selectedIds]);

  const toggle = useCallback((id: number) => dispatch({ type: "TOGGLE", id }), []);
  const remove = useCallback((id: number) => dispatch({ type: "REMOVE", id }), []);
  const clearAll = useCallback(() => dispatch({ type: "CLEAR_ALL" }), []);
  const openPopup = useCallback(() => dispatch({ type: "OPEN_POPUP" }), []);
  const closePopup = useCallback(() => dispatch({ type: "CLOSE_POPUP" }), []);
  const isSelected = useCallback((id: number) => state.selectedIds.includes(id), [state.selectedIds]);
  const isMaxed = state.selectedIds.length >= MAX_COMPARE;

  return (
    <ComparisonContext.Provider
      value={{
        state,
        toggle,
        remove,
        clearAll,
        openPopup,
        closePopup,
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
