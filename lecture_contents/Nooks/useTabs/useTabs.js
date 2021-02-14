export const useTabs = (initalTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
      return;
    }
    const [currentIndex, setCurrentIndex] = useState(initalTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex,
    };
};