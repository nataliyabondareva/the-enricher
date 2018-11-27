function wiseQuote(){
        var topic = document.getElementById("topic").value.toLowerCase();
        var randomIndex;
        var filteredQuotes;
        var filteredQuote;
        var noTopic = ["Can't seem to find anything on that! But hear this"];
        var quotes = [
            "If you want to know what God thinks of money, just look at the people he gave it to - Dorothy Parker",
            "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth. - William W. Purkey",
            "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Elbert Hubbard",
            "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage - Lao Tzu",
            "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
            "Everything in moderation, including moderation - Oscar Wilde",
            "Life isn't about finding yourself. Life is about creating yourself. - George Bernard Shaw",
            "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
            "The truth is rarely pure and never simple. - Oscar Wilde",
            "A lie can travel half way around the world while the truth is putting on its shoes. - Mark Twain",
            "Perhaps one did not want to be loved so much as to be understood. - George Orwell",
            "Facts do not cease to exist because they are ignored. - Aldous Huxley",
            "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love. - Fyodor Dostoevsky",
            "A thing is not necessarily true because a man dies for it. - Oscar Wilde",
            "The unexamined life is not worth living. - Socrates"
          ];
        
        if (topic != null){
          filteredQuotes = quotes.filter(function(quote){
            return quote.includes(topic);
          });
        }
        
        if (filteredQuotes.length) {
          randomIndex = Math.floor(Math.random() * filteredQuotes.length);
          filteredQuote = filteredQuotes[randomIndex];

        } else {
          randomIndex = Math.floor(Math.random() * quotes.length);
          filteredQuote = noTopic.concat('</br>' + " " + quotes[randomIndex]);
        }
        
        document.getElementById('quoteDisplay').innerHTML = filteredQuote;
      }
  