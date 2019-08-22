export const requestQuestions = () => {
    return $.ajax({
        method: "GET",
        url: "/api/questions",
    });
};