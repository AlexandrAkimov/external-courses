function history(historyTime, historyBookDate){
  var historyDateString = historyBookDate
  if(historyTime < 1){
    historyDateString = "just added"
  } else if (historyTime > 1 && historyTime < 60){
    var historyTimeRound = Math.round(historyTime);
    historyDateString = historyTimeRound + " minutes ago"
  } else if (historyTime > 60 && historyTime < 1440){
    historyTimeHours = historyTime / 60;
    historyTimeRound = Math.round(historyTimeHours);
    historyDateString = historyTimeRound + " hours ago"
  } else if (historyTime > 1440 && historyTime < 43200){
    historyTimeHours = historyTime / 1440;
    historyTimeRound = Math.round(historyTimeHours);
    historyDateString = historyTimeRound + " days ago"
  } else if (historyTime > 43200 && historyTime < 518400){
    historyTimeHours = historyTime / 43200;
    historyTimeRound = Math.round(historyTimeHours);
    historyDateString = historyTimeRound + " month ago"
  } else if (historyTime > 518400){
    historyDateString = " over a year ago"
  }
  return historyDateString;
}
