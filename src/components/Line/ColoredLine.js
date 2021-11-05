const ColoredLine = ({ color, height }) => (
    <div className="container">
        <hr style={{
            color: color,
            backgroundColor: color,
            height: height
            }}
        />
    </div>
);

export default ColoredLine;