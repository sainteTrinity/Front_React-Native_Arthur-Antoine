export const getRestaurants = () => {
    return fetch('https://lepetitchef-app.herokuapp.com/restaurant/all')
        .then(response => response.json())
        .then(data => {
        return data
        })
        .catch(error => {
        console.log(error)
        })

}



