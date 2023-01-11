# unixify action

This action converts a windows path to unix path using unixify.

## Inputs

### `path`

**Required** Windows path to be converted.

## Outputs

### `path`

Path converted to unix style.

## Example usage

```yaml
steps:
  - name: Unixify a string
    id: unixify_path
    uses: spearuav/unixify-action@v0.1
    with:
      path: "c:\\Temp\\folder\\app.exe"

  - name: Show result
    run: |
      echo ${{ steps.unixify_path.outputs.path }}
```