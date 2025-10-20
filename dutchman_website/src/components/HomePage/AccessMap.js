import "./AccessMap.css";
import Maps from "../map_components/access_points_map"

export default function Map() {
    return(
        <div className='parent-map-container'>
            <h1 className='access-title'>Available Access Points</h1>
            <Maps />
        </div>
    )
}