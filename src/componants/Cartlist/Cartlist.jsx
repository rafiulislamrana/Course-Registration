const Cartlist = (props) => {
    // eslint-disable-next-line react/prop-types
    const {list, filterList} = props
    console.log(list, filterList)
    // eslint-disable-next-line react/prop-types
    let index = filterList.indexOf(list)
    return (
        <p className="text-[#1c1b1b99] text-sm">{index + 1}. {list}</p>
    );
};

export default Cartlist;