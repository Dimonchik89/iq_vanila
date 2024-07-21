function changeProgress(currentTest, allTest, progressSuccess) {
  const progressWidth = (currentTest / allTest) * 100;
  progressSuccess.style.width = `${progressWidth}%`;
}

export { changeProgress };
