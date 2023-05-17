const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'continue playing dr3amh0use?',
    options: [
      {
        text: 'yes',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'You wake up inside a house with no memory of how you got there of who you are. There are 2 people, a man and a woman, who seem like your parents. But their eyes are glowing and they will not stop smiling...',
    options: [
      {
        text: 'Continue',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'RULES: Do not EVER let Moth3r and Fath3r know if you are scared. Do not leave the house without permission. When Moth3r is working in the attic, do not talk to her. If you hear crying coming from the attic, ignore it. Moth3r and Fath3r will get angry. Do not eat anything Moth3r cooks after 8pm. The food is not what it looks like... If you remember who you are, pretend you do not. Find a way to wake up.',
    options: [
      {
        text: 'Continue',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'You find your doppelganger locked in the attic, but their eyes are glowing and they cannot stop smiling too, just like Moth3r and Fath3r. Your doppelganger says you must find a special object to wake up. If you pick the wrong object, Moth3r and Fath3r will instantly know you are trying to escape. Which object do you choose?',
    options: [
	{
		text: 'A snowglobe your real mother gave you',
		nextText: 7
	},
	{
		text: 'A family portrait of your real family',
		nextText: 5
	},
      {
        text: 'A childhood toy you used to have',
        nextText: 6
	  }
    ]
  },
  {
    id: 5,
    text: 'Moth3r and Fath3r ripped you in half for trying to find your "real family."',
    options: [
      {
        text: 'Try again',
        nextText: -1
      }
    ]
  },
  {
    id: 6,
    text: 'The toy was a trap. Moth3r found you, ate your eyes, and locked you in the attic forever with Gloppy.',
    options: [
      {
        text: 'Try again',
        nextText: -1
      }
    ]
  },
  {
    id: 7,
    text: 'The snowglobe twists open and a key is inside. It is the key to the front door. Your doppelganger says it is the only way you can leave dr3amh0use without permission from Moth3r and Fath3r. Do you trust your doppelganger?',
    options: [
      {
        text: 'Yes',
        nextText: 9
      },
      {
        text: 'No',
        nextText: 8
      },
      {
        text: 'Pretend to trust them',
        nextText: 10
      }
    ]
  },
  {
    id: 8,
    text: 'Your doppelganger starts screaming, Moth3r and Fath3r find you and cook you in the oven',
    options: [
      {
        text: 'Try again',
        nextText: -1
      }
    ]
  },
  {
    id: 9,
    text: 'You survived but you hear Moth3r and Fath3r downstairs...',
    options: [
      {
        text: 'Continue',
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'You survived but your doppelganger is suspicious...',
    options: [
      {
        text: 'Continue',
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: 'You must hide the key from Moth3r and Fath3r. Where do you hide it?',
    options: [
      {
        text: 'Give it to your doppelganger',
        nextText: 13
      },
	  {
		  text: 'Swallow it',
		  nextText: 12
	  },
	  {
		  text: 'Put it in your pocket',
		  nextText: 14
	  }
    ]
  },
  {
	id: 12,
	text: 'The key was covered in poison. You vomited all of your organs and died',
	options: [
	{
		text: 'Try again',
		nextText: -1
	}
	
	]
  },
  {
	id: 13,
	text: 'You survived, your doppelganger is happy that you trust them',
	options: [
	{
		text: 'Continue',
		nextText: 15
	}
	]
  },
  {
	id: 14,
	text: 'You survived, for now...',
	options: [
	{
		text: 'Continue',
		nextText: 15
	}
	]
  },
  {
	  id: 15,
	  text: 'You hear Moth3r and Fath3r going into your room. This might be your only chance to escape...',
	  options: [
	  {
		  text: 'Leave your doppelganger, take they key, and run downstairs to the front door',
		  nextText: 17
	  },
	  {
		  text: 'Run downstairs to the front door but ask your doppelganger to come too',
		  nextText: 18
	  },
	  {
		  text: 'Jump out the window from the attic',
		  nextText: 16
	  }
	  ]
  },
  {
	  id: 16,
	  text: 'You fell into an infinite black void, your mind was destroyed and you are erased from existence',
	  options: [
	  {
		  text: 'Try again',
		  nextText: -1
	  }
	  ]
  },
  {
	  id: 17,
	  text: 'You survived but time is running out...',
	  options: [
	  {
		  text: 'Continue',
		  nextText: 19
	  }
	  ]
  },
  {
	  id: 18,
	  text: 'Your doppelganger says they cannot come with you but is thankful you asked. you run downstairs yourself...',
	  options: [
	  {
		  text: 'Continue',
		  nextText: 19
	  }
	  ]
  },
  {
	  id: 19,
	  text: 'As you are about to open the front door with the key, you hear Moth3r and Fath3r torturing your doppelganger in the attic. Your doppelganger screams "it was all a trap," and the real way to wake up is still hidden...',
	  options: [
	  {
		  text: 'Trust your doppelganger and go back to the attic',
		  nextText: 20
	  },
	  {
		  text: 'Use the key to open the door anyways',
		  nextText: 22
	  },
	  {
		  text: 'Try to find another way to wake up',
		  nextText: 21
	  }
	  ]
  },
  {
	  id: 20,
	  text: 'It was a trick. Your doppelganger was tortured into betraying you. As soon as you got to the attic Moth3r and Fath3r made your doppelganger eat you alive',
	  options: [
	  {
		  text: 'Try again',
		  nextText: -1
	  }
	  ]
  },
  {
	  id: 21,
	  text: 'Moth3r and Fath3r heard you and cut all your limbs off',
	  options: [
	  {
		  text: 'Try again',
		  nextText: -1
	  }
	  ]
  },
  {
	  id: 22,
	  text: 'you woke up',
	  options: [
	  {
		  text: 'return to dr3amh0use',
		  nextText: -1
	  }
	  ]
  }
]

startGame()