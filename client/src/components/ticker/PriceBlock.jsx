import {Box} from '@material-ui/core';

const PriceBlock = (props)=>{
  const {classes , price} = props

  return(
      <Box className={classes}>
        <div>Price</div>
        <div>{price}</div>
      </Box>
  )
}
export default PriceBlock;