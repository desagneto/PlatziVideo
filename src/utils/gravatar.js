import md5 from 'md5';

function gravatar(props) {

    const base = 'https://gravatar.com/avatar/';
    const formatEmail = props.email.trim().toLowerCase();
    const hash = md5(formatEmail, {encoding: 'binary'})

    return `${base}${hash}`
}

export default gravatar();
