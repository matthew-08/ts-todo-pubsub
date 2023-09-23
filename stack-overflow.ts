
type SponsoredMessage = {}
type PersonalMessage = {}
type AdminMessage = {}

type MessageType<C> = {
    type: C
}


interface Handler {
    canHandle(message: MessageType): 
}

// function that takes in 3 types, checker function which calls a method for the relevant type