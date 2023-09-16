const Cartlist = (props) => {
    // eslint-disable-next-line react/prop-types
    const {list, lists} = props
    // eslint-disable-next-line react/prop-types
    let index = lists.indexOf(list)
    return (
        // eslint-disable-next-line react/prop-types
        <p className="text-[#1c1b1b99] text-sm">{index + 1}. {list.title}</p>
    );
};

export default Cartlist;