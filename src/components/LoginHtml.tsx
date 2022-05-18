import {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Images from "../assets/logo.png";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './LoginHtml.scss';
import ReactSession from 'react-client-session/dist/ReactSession';
class LoginHtml extends Component{
  constructor(props){
    super(props)
    const codeCleint =  ReactSession.get("codeclient")
    if(codeCleint){
          this.setState({page:true})
    }
   
  }

  state ={
    utilisateur : "",
    motDePasse : "",
    placeholderUser : "Code client",
    placeholderPass : "Mot de passe",
    page : false
  }
 
 baseUrl = "http://localhost:8000/api/login";
  login = async (event)=>{
    event.preventDefault()
    const user = this.state.utilisateur
    const pass = this.state.motDePasse
    await axios.post(this.baseUrl,{user}).then((rep)=>{
            if(rep.data == ""){
              this.setState({placeholderUser:"Utilisateur incorrect"})
            }
           if(rep.data.MotDePasse == pass){
                ReactSession.set("codeclient",rep.data.CodeClient)
                this.setState({page:true})
                
           }else{
               this.setState({placeholderPass:"Mot de passe incorrect"})
           }

    }).catch(function(error){
         alert(error)
    });
    this.setState({motDePasse:"",utilisateur : ""}) 
  }
   onChangePass = (event)=>{
     const value = event.currentTarget.value
     this.setState({motDePasse:value})
   }
   onChangeUtilisateur = (event)=>{
     const value = event.currentTarget.value
     this.setState({utilisateur:value})
   }
  
render () {
   return  <div className="container form-content"> 

       { this.state.page ?  <Redirect  to={{pathname:'/Accueil'}} /> : " " }

       <img src={Images} className="image" alt="" />
       <form onSubmit={this.login} className="form-containt">
       <div className="input-content">
            <div className="input-cont">
              <input type="text" className='use' value={this.state.utilisateur} onChange={this.onChangeUtilisateur} placeholder={this.state.placeholderUser} />
            </div>
          <div className="input-cont"> 
              <input type="password"  className='pass' value={this.state.motDePasse} onChange={this.onChangePass} placeholder={this.state.placeholderPass} />
              </div>
          </div>
          <div className="input-cont">   
              <button className='login-button'>
              <span className="text-btn">Se connecter</span>
              </button>
          </div>    
              </form>
       </div>
      
  }
}
export default LoginHtml;
