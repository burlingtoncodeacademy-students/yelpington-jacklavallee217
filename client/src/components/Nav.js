import NavLink from './NavLink'

function Nav(props) {
    // Checks if the props.data variable is populated
    if (props.data !== null) {
        {
        // Collection of each restaurant's link mapped out
        }
        let restaurantNames = props.data.map(item => {
            return <NavLink data={item} setCenter={props.setCenter}></NavLink> 
        })
        return (
            <div id="nav">{restaurantNames}</div>
        )
    }
    else {
        return null;
    }
}

export default Nav