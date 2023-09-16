import Cartlist from "../Cartlist/Cartlist";
import PropTypes from 'prop-types'
import Toast from "../Toast/Toast";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Carts = (props) => {
    
    // eslint-disable-next-line react/prop-types
    const { lists } = props;
    
    console.log(lists)
    let sum = 0
    let max = 20
    // eslint-disable-next-line react/prop-types
    for(let i = 0; i < lists.length; i++){
        if(sum<20){
            // eslint-disable-next-line react/prop-types
            sum = lists[i].course_duration + sum;
            // eslint-disable-next-line react/prop-types
            max = max - lists[i].course_duration;
            if(sum>20){
                if(max<0){
                    // eslint-disable-next-line react/prop-types
                    max = max + lists[i].course_duration;
                    // eslint-disable-next-line react/prop-types
                }
                // eslint-disable-next-line react/prop-types
                sum = sum - lists[i].course_duration;
                // eslint-disable-next-line react/prop-types
                lists.pop();
                toast("You cant add more than 20 credit")
            }
            
            
        }
    }
    // const sumTime = lists.map(time => lists.course_duration + time)
    console.log(sum)
    // const alrt = () => {
    //     alert("You can add more than 20 credit")

    // }
    return (
        <div className="flex-1">
            <div className="w-{23%} bg-white p-6 rounded-xl flex flex-col gap-4">
                <p className="text-[#2F80ED] font-bold text-base"> Credit Hour Remaining {max}hr</p>
                <hr />
                <h3 className="font-bold text-lg">Course Name</h3>
                {
                    lists.map((list, idx) => <Cartlist key={idx} list={list} lists={lists}></Cartlist>)
                }
                <hr />
                <p>Total Credit Hour: {sum}</p>
                {/* <p>Total Credit Hour: </p> */}
                <hr />
                <ToastContainer />
            </div>
        </div>
    );
};

Carts.prototype = {
    props: PropTypes.array,
    filterList: PropTypes.array
}

export default Carts;