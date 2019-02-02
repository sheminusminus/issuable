export const formatRepos = data => data.reduce((obj, item) => ({
  ...obj,
  [item.id]: item,
}), {});

export const formatIssues = data => data.reduce((obj, item) => ({
  ...obj,
  [item.id]: {
    id: item.id,
    assigneeAvatar: item.assignee ? item.assignee.avatar_url : null,
    assignee: item.assignee ? item.assignee.login : null,
    title: item.title,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
  },
}), {});
