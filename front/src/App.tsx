import { ToastContainer } from 'react-toastify'
import { T_Initial } from './components/templates/T_Initial'
import { GlobalStyle } from './style/global'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
      <T_Initial />
    </>
  )
}

export default App
