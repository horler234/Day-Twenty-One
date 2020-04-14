var myDay;
var quote;
var speaker;

switch (new Date().getDay()) {
  case 0:
    myDay = 'SUNDAY';
    quote = '"If you look at what you have in life, you will always have more. If you look at what you do not have in life, you will never have enough."';
    speaker = 'Oprah Winfrey'
    break;

  case 1:
    myDay = 'MONDAY';
    quote = '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."';
    speaker = 'Steve Jobs';
    break;

  case 2:
    myDay = 'TUESDAY';
    quote = '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."';
    speaker = 'Helen Keller';
    break;

  case 3:
    myDay = 'WEDNESDAY';
    quote = '"The greatest glory in living lies not in never falling, but in rising every time we fall."';
    speaker = 'Nelson Mandela';
    break;

  case 4:
    myDay = 'THURSDAY';
    quote = '"Many of life\'s failures are people who did not realize how close they were to success when they gave up."';
    speaker = 'Thomas A. Edison';
    break;

  case 5:
    myDay = 'FRIDAY';
    quote = '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success."';
    speaker = 'James Cameron';
    break;

  case 6:
    myDay = 'SATURDAY';
    quote = '"You focus on the trivial things and lose sight of what is most important. Change is impossible in this fog of ignorance. How can we evolve when regulation is all we know?"';
    speaker = 'Uchiha Itachi';
    break;

}

document.getElementById('weekday').innerHTML = myDay;
document.getElementById('popular-quote').innerHTML = quote;
document.getElementById('speaker').innerHTML = speaker;
