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
uses: actions/unixify-action@v0.1
with:
  path: '\\path\\to\\file'
```