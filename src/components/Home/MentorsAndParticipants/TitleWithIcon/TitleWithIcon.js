import {Typography} from "@material-ui/core";


const TitleWithIcon = ({icon, alt,  title}) => {
    return (
        <div style={{height: '38px', display: 'flex', justifyContent: 'flex-start'}}>
            <img src={icon} alt={alt} style={{width: '32px', objectFit: 'scale-down',marginRight: '8px'}}  />
            <Typography
                variant='h6'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {title}
            </Typography>
        </div>
    );
}

export default TitleWithIcon;