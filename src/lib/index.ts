const convertToHTTPS = (url: string | undefined) => {
    return url?.replace(/http/g, 'https' ) || undefined;
} 

export { convertToHTTPS };
