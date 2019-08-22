json.user do
    json.partial! './api/users/user', user: @user
end

json.responses do
    @user.responses.each do |response|
        json.set! response.id do
            json.partial! './api/responses/response', response: response
        end
    end
end