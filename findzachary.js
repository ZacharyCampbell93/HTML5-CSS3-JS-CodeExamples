jshint multistr:true
var text = "Hi, my name is Zachary, this is the text variable. I am using this to find words, like Zachary, in my text. Zany Zachary zips."
var myName = "Zachary"
var hits = []
for(var i = 0; i < text.length; i++) {
    if (text[i] === "Z") 
        {for(var j = i; j < i + myName.length; j++)
            {hits.push("Zachary")}
        }
    }
if (hits.length === 0) 
    {console.log ("Your name wasn't found!")}
else
    {console.log(hits)}
