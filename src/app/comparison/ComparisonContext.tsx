import { createContext, useContext, useReducer, useCallback, useEffect, type ReactNode } from "react";
import { toast } from "sonner";
import type { ComparisonState, ComparisonAction } from "./types";

/** YITH → Compare → “Maximum number of products to compare” */
const MAX_COMPARE = 3;

/** YITH stores the compare list in a cookie; localStorage is the prototype stand-in */
const STORAGE_KEY = "yith_woocompare_list";

/**
 * YITH option: open compare view automatically when the 2nd product is selected.
 * In page mode this navigates to the dedicated Compare page.
 */
const AUTO_OPEN_ON_SECOND = true;

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
        return {
          ...state,
          selectedIds: state.selectedIds.filter((i) => i !== id),
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
        openCompareRequested: AUTO_OPEN_ON_SECOND && next.length === 2 ? true : state.openCompareRequested,
      };
    }
    case "REMOVE":
      return {
        ...state,
        selectedIds: state.selectedIds.filter((i) => i !== action.id),
      };
    case "CLEAR_ALL":
      return { ...state, selectedIds: [], openCompareRequested: false };
    case "OPEN_COMPARE":
      return { ...state, openCompareRequested: true };
    case "ACK_OPEN_COMPARE":
      return { ...state, openCompareRequested: false };
    default:
      return state;
  }
}

const ComparisonContext = createContext<{
  state: ComparisonState;
  toggle: (id: number) => void;
  remove: (id: number) => void;
  clearAll: () => void;
  openCompare: () => void;
  ackOpenCompare: () => void;
  isSelected: (id: number) => boolean;
  isMaxed: boolean;
  maxCompare: number;
} | null>(null);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(comparisonReducer, {
    selectedIds: [],
    openCompareRequested: false,
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
  const openCompare = useCallback(() => dispatch({ type: "OPEN_COMPARE" }), []);
  const ackOpenCompare = useCallback(() => dispatch({ type: "ACK_OPEN_COMPARE" }), []);
  const isSelected = useCallback((id: number) => state.selectedIds.includes(id), [state.selectedIds]);
  const isMaxed = state.selectedIds.length >= MAX_COMPARE;

  return (
    <ComparisonContext.Provider
      value={{
        state,
        toggle,
        remove,
        clearAll,
        openCompare,
        ackOpenCompare,
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
