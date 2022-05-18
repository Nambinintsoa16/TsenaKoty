import React,{Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faMessage,faThumbsUp,faHeart,faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
class AccueilHtml extends Component{

render(){
return <div>
    <div className="recherche p-2">
        <div className="containt-serche">
            <div className="input-cherche">
                <input type="text" />
            </div>
            <div className="btn-cherche">
                <span className="btn-cherche">
                    <FontAwesomeIcon icon={faSearch} /></span>
            </div>
        </div>
    </div>
    <div className="containt-article">
        <article>
            <div className="card-header">
                Article 1
            </div>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis voluptas fugit aspernatur,
                    consequatur
                    consequuntur similique officia iusto
                    voluptatem ullam deleniti velit distinctio voluptatibus numquam maxime dolorum eaque hic quod
                    praesentium.
                </p>
                <p>
                    <a href="#">
                        <FontAwesomeIcon icon={faThumbsUp} /></a>
                    <a href="#">
                        <FontAwesomeIcon icon={faMessage} /></a>
                    <a href="#">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
                </p>
            </div>
        </article>
    </div>
</div>
}}
export default AccueilHtml;