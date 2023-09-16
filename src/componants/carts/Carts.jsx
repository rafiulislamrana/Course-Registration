import Cartlist from "../Cartlist/Cartlist";
import PropTypes from 'prop-types'

const Carts = (props) => {
    // eslint-disable-next-line react/prop-types
    const { lists,sum,max } = props;

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
                <hr />
            </div>
        </div>
    );
};

Carts.prototype = {
    props: PropTypes.array,
    filterList: PropTypes.array
}

export default Carts;