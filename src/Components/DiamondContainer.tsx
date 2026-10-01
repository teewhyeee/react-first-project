import DiamondCard from "./DiamondCard";

export default function DiamondContainer() {
    return <div className="DiamondContainer">
        <DiamondCard 
        image="src\assets\pexels-the-glorious-studio-10475791.jpg"
        productName="Princess" 
        price="$1,350" />
        <DiamondCard 
        image="src\assets\pexels-the-glorious-studio-10475793.jpg"
        productName="Swan"
        price="$1,090" />
        <DiamondCard 
        image="src\assets\pexels-the-glorious-studio-10475794.jpg"
        productName="Ice Lake"
        price="$899"
        sale={true} /> 
    </div>

    // sale ={true}
    // if props is not a string you have to add {}
}