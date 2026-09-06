<template>
	<Suspense>
		<slot />

		<template #fallback>
			<spinkit-cube-rotate-scale />
		</template>
	</Suspense>
</template>