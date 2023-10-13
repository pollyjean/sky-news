interface checkForRankingChangesProps {
  (rank: number, rankLastWeek: number): "(new)" | "(up)" | "(down)" | "" | null;
}

export const checkForRankingChanges: checkForRankingChangesProps = (rank, rankLastWeek) => {
  if (rankLastWeek === 0) return "(new)";
  if (rank === rankLastWeek) return "";
  if (rank > rankLastWeek) return "(up)";
  if (rank < rankLastWeek) return "(down)";
  return null;
};
