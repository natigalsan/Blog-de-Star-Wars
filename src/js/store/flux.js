const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favP: [],
			favnaves: [],
			favpl: [],
			people: [],
			vehicles: [],
			planets: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: async () => {		 //vamos a poner async (asíncrona xk puede que tarde) de esta manera se ejecuta en segundo plano y cuando esté lista nos entregará la respuesta.
				await fetch ('https://swapi.dev/api/people')
				.then (response => response.json())      //entonces cuando esta pagina se cargue voy a tener una respuesta que se va a retornar en formato "json"
				.then (data => {console.log(data.results)
					setStore({people:data.results})		//agrego una nueva acción y digo que mi función setStore, me va a modificar algo dentro del "store", al elemento 'people' queremos que modifique, el data.results xk este es el arreglo
					
				
				})	//cuando los datos ya sean "json", haré un console.log()
				.catch (error => console.log("DANGER, DANER", error))   //en caso de error me voy al .catch mostrando el mensaje de error


						

			},
			addFav: (name) =>{
				
						<input
							className="d-flex justify-content-center"
							id="Entrada"
							type="text"
							onChange={(e) => setInput(e.target.value)}
							value={input}
							placeholder="Please, write something." //capturo el elemtno en el input
						/>
								


			},
		


			loadSomeVehicles: async () => {
				await fetch ('https://swapi.dev/api/vehicles')
				.then (response => response.json())
				.then (data => {console.log(data.results)
					setStore({vehicles:data.results})
				})
				.catch (error => console.log("DANGER, DANGER", error))



			},
			loadSomePlanets: async () =>{
				await fetch ('https://swapi.dev/api/planets')
				.then (response => response.json())
				.then (data => {console.log(data.results)
					setStore({planets: data.results})
				})
				.catch (error => console.log("DANGER, DANGER", error))
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
