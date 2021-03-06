@if ($breadcrumbs)
<ol class="breadcrumb" style="background-color:#FFFFFF">
    @foreach ($breadcrumbs as $breadcrumb)
    @if (!$breadcrumb->last)
    <li>
        <i class="{{{$breadcrumb->icon}}}"></i>
        <a href="{{{ $breadcrumb->url }}}">{{{ $breadcrumb->title }}}</a>
    </li>
    @else
    <li class="active">
        {{{ $breadcrumb->title }}}
    </li>
    @endif
    @endforeach
</ol>
@endif