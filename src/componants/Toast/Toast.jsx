import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    // const alrt = () => {
    //     alert("You can add more than 20 credit")
    // }
    // const notify = () => toast("You can add more than 20 credit");
    return (
        <div>
            {/* <button onClick={notify}>Notify!</button> */}
            {toast("You cant add more than 20 credit")}
            <ToastContainer />
        </div>
    );
};

export default Toast;