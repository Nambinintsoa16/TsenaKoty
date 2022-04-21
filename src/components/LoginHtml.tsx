
import './LoginHtml.css';

interface ContainerProps { }
const LoginHtml: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <strong>Tsena koty</strong>
      <input type="text"  placeholder="customer code" />
      <input type="password"  placeholder="password" />
      <div className='remember'>
         <label><input type="checkbox" className='remember'/>Remember me</label>
         <span className='psw'>Forgot<a href="">Password?</a></span>
      </div>
      <button className='login-button'>Login</button>
    </div>
  );
};
export default LoginHtml;
