const people = [
    {
      id: 1,
      name: "Andrey",
      link: 'https://i.pinimg.com/564x/10/d6/6f/10d66f0bc218a1bf4bce14201a92d4a4.jpg',
      sex: "male",
    },
    {
      id: 2,
      name: "Ivan",
      link: 'https://avatars.dzeninfra.ru/get-zen_doc/1874110/pub_5f94e2d946218d3c844e1b13_5f94e30146218d3c844e25c1/scale_1200',
      sex: "male",
    },
  
  {
      id: 3,
      name: "Irina",
      link: 'https://abrakadabra.fun/uploads/posts/2022-01/1642176703_24-abrakadabra-fun-p-multyashnie-zhenshchini-58.jpg',
      sex: "female",
    }
    ]

    const ADD = 'ADD'
    
    export const addPeopleAction = (name, sex, link) => {
        return {type: ADD, payload: {id: Date.now(), name, sex, link}}
    }

    export const peopleReducer = (state = people, action) => {
        if(action.type === ADD){
            return [...state, action.payload]
        }else{
          return state
        }
    }