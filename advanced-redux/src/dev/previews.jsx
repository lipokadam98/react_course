import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Products from "../components/Shop/Products";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Products">
                <Products/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews