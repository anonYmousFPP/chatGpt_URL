import './App.css'
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    <>
      <Sidebar className='sidebar1' />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <img className='img1' src='./images/chat-gpt.jpg' alt='chat-gpt LOGO' />
      <h1 id='h1'>How can i help you today?</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div id='div1'>
        <Comp className="comp-container">{'You Rights ?'}</Comp>
        <Comp className="comp-container">{'Search About Judicial Law'}</Comp>
        <Comp className="comp-container">{'Give me ideas'}</Comp>
        <Comp className="comp-container">{'View Constitution'}</Comp>
      </div>
      <br/>
      <div className='div2'>
        <input id='input1' placeholder='Message ChatGPT'></input>
      </div>
     <h5 className='h5-1'>We gave general advice, pls consider a lawyer for detailed one</h5>
    </>
  )
}

function Comp({children, className}){
  return (
    <div className={className}>
      {children}
    </div>
  )

}

function Sidebar({className}){
  return (
    <>
      <div className={className}>Login</div>
      <a className={className}>Signup</a>
    </>
  )
}

export default App;
