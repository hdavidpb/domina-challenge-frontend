import { Stack, Skeleton } from "@mui/material";

export const SkeletonTable = () => {
  return (
    <Stack spacing={1} width="100%" height="100%">
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="rectangular" height={60} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rounded" height={60} />
      <Skeleton variant="rectangular" height={60} />
    </Stack>
  );
};
