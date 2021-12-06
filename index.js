let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

//   console.log(myCollection);

function describeItem(item) {
    if(item.count === 1)
        console.log(`I have a ${item.name}. Here is what I liked about it: ${item.whatILike}`);
    else if(item.count > 1)
        console.log(`I have ${item.count} ${item.name}. Here is what I liked about them: ${item.whatILike}`)
}

function describeCollection(myArr) {
    myArr.forEach(describeItem); 
}

describeCollection(myCollection);