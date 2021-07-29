
export const cleanText = text => text.trim()
export const capitalizeText = text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
export const isTeacher = user => user.role === "teacher"
// isTeacher(props.loggedUser) ? 