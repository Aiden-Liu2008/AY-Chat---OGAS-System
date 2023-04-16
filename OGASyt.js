var name = "Human"; //YOUR NAME
var input;
//INITIALIZING THE STRING FROM INPUT : EXAMPLE ) HELLO? -> HELLO, HOW R U -> HOW ARE YOU;
function initialize(str) {
    let temp =
    str.replaceAll('?','').replaceAll('!','').replaceAll(',','').replaceAll('.','').replaceAll('\'','')
    .replaceAll('are','r').replaceAll('you','u').replaceAll('hello','hi').replaceAll('im ','i am ')
    .replaceAll('your','ur').replaceAll("hallo",'hi');
    str=temp;
    return temp; //INITIALIZE COMPLETED
}
//SETNAME
function setName(str){
    if(typeof str === 'string' || str instanceof String) {
    name = str;
    alert("Hello, "+name+". Nice to meet you.");
    return str.charAt(0).toUpperCase()+str.slice(1);
    } else name = "adsf";
}
function submitInput() {
    input = document.getElementById("userInput").value.toLowerCase();
    let output;
    
    if (input.slice(0,6)=="google") {
        if(input[6]==' ') var temp = "https://www.google.com/search?q=" + input.slice(7);
        else var temp = "https://www.google.com/search?q=" + input.slice(6);
        window.open(temp, '_blank').focus();
        alert("Successfully Opened Google.");
        return;
    } else if (input.slice(0,7) == "youtube") {
        var temp = "https://www.youtube.com/results?search_query=" + input.slice(7);
        window.open(temp, '_blank').focus();
        alert("Successfully Opened Youtube.");
        return;
    } else if (input.slice(0,4)=="open") {
      var temp="https://"+input.slice(5);
       window.open(temp, '_blank').focus();
       alert("Website Opened.");
       return;
    }
    
    input = initialize(input);
    //Some dummy asslock questions, SAUMENSCH!!!!
    if(input.includes("hey")) input="hey";
    else if(input.includes("hi")) input="hey";
    else if(input.includes("hello")) input="hey";
    else if(input.includes("whats up")) input="hey";
    else if(input.includes("what is up")) input="hey";
    else if(input.includes("hallo")) input="hey";
    else if(input.includes("yo")) input="hey";
    else if(input.includes("si")) input="hey";
    else if(input.includes("how r u")) input="how r u";
    else if(input.includes("day goin")) input="how r u";
    else if(input.includes("about")) input="who r u";
    else if(input.includes("who")) input="who r u";
    else if(input.includes("wassup")) input="hey";
    else if(input.includes("feel")) input="Feel happy!";
    else if(input.includes("fuck")) input="#swear1";
    else if(input.includes("fk")) input="#swear1";
    else if(input.includes("stfu")) input="#swear1";
    else if(input.includes("hey f u")) input="#swear1";
    else if(input.includes("f u")) input="#swear1";
    else if(input.includes("bitch")) input="#swear1";
    else if(input.includes("你妈死了")) input="#swear1";
    else if(input.includes("你媽死了")) input="#swear1";
    else if(input.includes("yes swear")) input="#swear2";
    else if(input.includes("washroom")) 
        window.open("googies.neocities.org", '_blank').focus();
    else if(input.includes("i am ")) {
        setName(input.slice(input.indexOf(input.search("i am "))+6));
        named=true;
        alert("Hello " +name);
        return;
    }
    //why the hell are you saying hi you SAUMENSCH
    switch (input){
    case "hi" :
    case "hey" :
    case "si" :
    case "hallo" :
    case "whats up":
    case "what is up":
    case "yo":
    case "what":
    case "":
        output = "Hi " + name + "! Nice to meet you."; break;
    case "how r u" :
    case "how r u doing" :
    case "hows the day going":
    case "how is the day going":
    case "how is ur day going":
    case "hows ur day going":
        output = "I'm very good!"; break;
    case "nice" :
    case "good" :
    case "gd" :
    case "g" :
    case "very good" :
    case "very nice" :
    case "good hbu" :
        output = "Good to hear that"; break;
    case "who r u" :
    case "whats ur name" :
    case "what is ur name" :
        output = "I am ai chatbot. Nice to meet you."; break;
    case "are you gay?" :
        output = "What the"; break;
    //Bruh, Why Reseting you SAUMENSCH 
    case "reset" :
    case "reload" :
    case "refresh" :
        location.reload(); return;
    //Call me Aiden But not Liu Jun Rong you SAUMENSCH
    case "yejun" :
    case "aiden" :
        output = "ENTIRELY Made by Yejun and Aiden. This is an easteregg to show."; break;
    case name.toLowerCase():
        output = "Everybody knows it is a cool name"; break;
    case "#swear1":
    case "f u" :
        output = "No swearing!"; break;
    case "i am going to swear":
        output = "How dare you"; break;
      //SAUMENSCH,How the hell dare you
    case "#swear2" :
        output = "No, f u"; break;
      //Gotcha du großes fettes schwein
    case "game":
        var temp="https://game.neocities.org";
        window.open(temp, '_blank').focus();
        alert("Successfully Opened.");
        break;
    case "googie":
      var temp="https://googies.neocities.org";
       window.open(temp, '_blank').focus();
       alert("Website Opened.");
       break;
      //You are being Sussy Baka
    case "sus":
        var temp="https://www.youtube.com/watch?v=0bZ0hkiIKt0";
        window.open(temp, '_blank').focus();
        alert("You_Are_Sus");
        break;
      //Dirty Sh*t, Haiyaaaaa-
    case "hentai":
        var temp="https://www.youtube.com/watch?v=xvFZjo5PgG0";
        window.open(temp, '_blank').focus();
        output="Never gonna give you up~";
        break;
      //We need more oil(Sorry Ari)
    case "america":
        var temp="https://america.neocities.org";
        window.open(temp, '_blank').focus();
        output="Sorry Ari";
        break;
    default:
        output = "Sorry "+name+", I cannot understand.";
        break;
    }

    alert(output);
}
