var words=$("#cats").text().split("");$("#myText").empty(),$.each(words,function(t,p){" "===p?$("#myText").append("<span>&nbsp;</span>"):$("#myText").append($("<span>").text(p))});