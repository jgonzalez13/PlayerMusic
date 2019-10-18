
function List() {

    this.head = null;
    this.tail = null;

    this.createNode = function(data) {
        return {
            data: data, 
            next: null,
            prev: null 
        }
    };

    this.addSong = function(data) {
        if (this.head == null) {
          this.tail = this.createNode(data);
          this.head = this.tail;
          this.index = 0
        } else {
          const temp = this.tail
          this.tail.next = this.createNode(data);
          this.tail = this.tail.next;
          this.tail.prev = temp
        }
    };

    this.nextSong = function() {
      if (this.head !== null)
        if(this.head.next !== null) {
          this.head = this.head.next

          return true
        }

      return false
    } 

    this.prevSong = function() {
      if (this.head !== null)
        if(this.head.prev !== null) {
          this.head = this.head.prev

          return true
        }

      return false
    } 
}

const list = new List()

function getsong(song){
    list.addSong(song)


    document.getElementById("song").innerHTML = "<b>"+ list.head.data.song + "</b>"

    print()
}

function nextSong() {

  if(list.nextSong()) {
    document.getElementById("song").innerHTML = "<b>"+ list.head.data.song + "</b>"

    print()
  }
  // document.getElementById("msg").innerHTML = "<i> No hay rola en la cola </i>"
}

function prevSong() {

  if(list.prevSong()) {
    document.getElementById("song").innerHTML = "<b>"+ list.head.data.song + "</b>"

    print()
  }
  // document.getElementById("msg").innerHTML = "<i> No hay rola en la cola </i>"
}


function print () {
  
  let x = list.head;
  let li = null

  document.getElementById("cola").innerHTML = ""
  while (x != null) {
  
    if(x.next !== null ) {
      li=document.createElement('li');
      li.innerHTML= x.next.data.song 
      document.getElementById("cola").appendChild(li);
    }
    x = x.next;
  }
}