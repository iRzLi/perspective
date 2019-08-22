json.extract! user, :id, :email

json.response_ids do
    json.array! user.responses.ids
end