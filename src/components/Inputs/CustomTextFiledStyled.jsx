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
		transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
	}
});

export default CustomTextFiledStyled;
