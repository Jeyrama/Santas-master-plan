/*
Santa has just revealed his master plan! 
His goal was to automate as many of his tasks as possible by posting them as challenges.
Thanks to the solutions from these challenges, 
Santa has completed his tasks a week before Christmas!

You know what that means...Party at Santa's place! All that's left is to invite everyone. 
Santa sent out a large amount of invitations, and is patiently waiting for responses.
Who's attending the Party?

Write a function called getAttendees that takes two arguments:
  Array containing all the names of the people Santa invited
  An array of responses (objects) with the following structure:
  {name: 'Easter Bunny', response: 'declined'}

getAttendees should return an array containing the names of all the people who accepted 
Santa's invitation and the names of those who did not respond to the invitation. 
Santa is very positive, so he is assuming those who did not respond will show up. 
Anyone who declined the invitation will not be attending the party. 
If nobody is attending the party, return an empty array [].

Example:
  getAttendees( ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'],
   [ 
     {name: 'Easter Bunny', response: 'declined'}, 
     {name: 'Jack Frost', response: 'declined'}, 
     {name: 'Tooth Fairy', response: 'accepted'} 
   ] );// => returns ['Tooth Fairy', 'Frosty the Snowman']
*/


// Solution

function getAttendees(peopleInvited, responses){

  let nopes = responses.filter(function(r) {
    return r.response === 'declined';
  }).map(function(r) { return r.name });
  
  return peopleInvited.filter(function(p) {
    return nopes.indexOf(p) === -1;
  });
}

// or

function getAttendees(peopleInvited, responses){
  responses.forEach(function(val){
    if (val.response === 'declined') peopleInvited.splice( peopleInvited.indexOf(val.name), 1); 
  });
  return peopleInvited;
}