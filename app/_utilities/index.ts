interface checkForRankingChangesProps {
  (rank: number, rankLastWeek: number, weeksOnList: number): string | null;
}

export const checkForRankingChanges: checkForRankingChangesProps = (rank, rankLastWeek, weeksOnList) => {
  if (rankLastWeek === 0 && weeksOnList > 0) return "New";
  if (rank === rankLastWeek || rankLastWeek === 0) return "";
  if (rank > rankLastWeek) return `🔻 (${rankLastWeek - rank})`;
  if (rank < rankLastWeek) return `🔺 (${rankLastWeek - rank})`;
  return null;
};
