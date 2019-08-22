export const requestUser = (id) => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${id}`,
    });
};

export const createtUser = (UserResponseForm) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user: UserResponseForm}
    });
};