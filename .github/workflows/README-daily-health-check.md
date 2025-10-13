# Daily Health Check Action

This GitHub Action automatically assigns health-check issues to @copilot on a daily basis.

## Features

- **Daily Schedule**: Runs every day at 9:00 AM UTC
- **Manual Trigger**: Can be manually triggered via the Actions tab
- **One Issue at a Time**: Assigns only one unassigned health-check issue per run
- **Minimal Dependencies**: Uses only native GitHub CLI (no custom code or external actions)
- **Safe**: Only assigns issues that are:
  - Labeled with `health-check`
  - Currently open
  - Not already assigned to anyone

## How It Works

1. The workflow queries all open issues with the `health-check` label
2. It filters for issues that don't have any assignees
3. If unassigned issues exist, it assigns the first one to @copilot
4. It reports the assignment in the workflow logs and summary

## Manual Trigger

To manually run the workflow:

1. Go to the **Actions** tab in your repository
2. Select **Daily Health Check Assignment** from the workflows list
3. Click **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

## Schedule

The workflow runs automatically once per day at 9:00 AM UTC (4:00 AM EST / 1:00 AM PST).

To modify the schedule, edit the cron expression in `.github/workflows/daily-health-check.yml`:

```yaml
on:
  schedule:
    - cron: '0 9 * * *'  # Modify this line
```

## Permissions

The workflow requires:
- **issues: write** - To assign issues
- **contents: read** - To checkout the repository (standard practice)

## Safety Features

- **One at a time**: Only assigns one issue per run to prevent overwhelming @copilot
- **Already assigned check**: Skips issues that already have assignees
- **Label filtering**: Only processes issues with the `health-check` label
- **Graceful exit**: If no unassigned issues exist, the workflow completes successfully

## Monitoring

Check the workflow runs in the Actions tab to monitor:
- Which issues were assigned
- How many unassigned health-check issues remain
- Any errors or warnings

## Troubleshooting

### Workflow doesn't assign any issues

**Possible causes:**
1. All health-check issues are already assigned
2. No issues have the `health-check` label
3. All issues are closed

**Solution:** Check the workflow logs for details about what was found.

### @copilot doesn't respond to assignment

**Possible causes:**
1. GitHub Copilot may need to be explicitly enabled for issue assignments
2. The repository may need Copilot access configured

**Solution:** Verify Copilot is enabled for your repository and organization.

### Workflow fails with permissions error

**Solution:** Ensure the workflow has `issues: write` permission in the workflow file.

## Customization

To customize which user receives assignments, change `--add-assignee "copilot"` to a different username in the workflow file.

To change which label is used, modify `--label "health-check"` to your preferred label.
