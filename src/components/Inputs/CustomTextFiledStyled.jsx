import { TextField, styled } from '@mui/material';

const CustomTextFiledStyled = styled(TextField)({
	'&::placeholder': {
		color: '#e0e0e0'
	},
	'&  svg': {
		fill: '#e0e0e0'
	},
	'&:hover svg, &:focus-within svg': {
		fill: '#000',
		transition: 'fill 250ms ease'
	}
});

export default CustomTextFiledStyled;
