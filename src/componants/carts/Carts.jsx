import Cartlist from "../Cartlist/Cartlist";
import PropTypes from 'prop-types'



const Carts = (props) => {
    
    // eslint-disable-next-line react/prop-types
    const { list, times } = props;
    const filterList = [...new Set(list)]
    console.log(times)
    // const alrt = () => {
    //     alert("You can add more than 20 credit")

    // }
    return (
        <div className="flex-1">
            <div className="w-{23%} bg-white p-6 rounded-xl flex flex-col gap-4">
                <p className="text-[#2F80ED] font-bold text-base"> Credit Hour Remaining 20hr</p>
                <hr />
                <h3 className="font-bold text-lg">Course Name</h3>
                {
                    filterList.map((list, idx) => <Cartlist key={idx} list={list} filterList={filterList}></Cartlist>)
                }
                <hr />
                <p>Total Credit Hour: {times > 20 ? () => notify() : times}</p>
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